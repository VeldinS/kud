import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const formData = await request.formData();

        const name = formData.get('name');
        const shortDescription = formData.get('short_description');
        const description = formData.get('description');
        const date = formData.get('date');

        // Handle file uploads
        const mainImage = formData.get('main_image');
        const otherImages = formData.getAll('other_images');

        // Upload the main image to the storage bucket
        const mainImageFileName = `${Date.now()}-${mainImage.name}`;
        const { data: mainImageUpload, error: mainImageError } = await supabase
            .storage
            .from('event-images')
            .upload(mainImageFileName, mainImage);

        if (mainImageError) {
            console.error('Main image upload error:', mainImageError);
            return NextResponse.json({ error: 'Main image upload failed' }, { status: 500 });
        }

        const mainImagePath = mainImageUpload.path;

        // Upload other images to the storage bucket
        const otherImagesPaths = [];
        for (let image of otherImages) {
            const fileName = `${Date.now()}-${image.name}`;
            const { data: uploadData, error: uploadError } = await supabase
                .storage
                .from('event-images')
                .upload(fileName, image);
            if (uploadError) {
                console.error('Other image upload error:', uploadError);
                return NextResponse.json({ error: 'Other image upload failed' }, { status: 500 });
            }

            otherImagesPaths.push(uploadData.path);
        }

        // Insert event into the database
        const { data, error } = await supabase.from('events').insert([{
            name,
            short_description: shortDescription,
            description,
            main_image: mainImagePath,
            other_images: otherImagesPaths,
            date
        }]);

        if (error) {
            console.error('Database insert error:', error);
            return NextResponse.json({ error: 'Insert failed' }, { status: 403 });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error in create API route:', error);
        return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
    }
}
