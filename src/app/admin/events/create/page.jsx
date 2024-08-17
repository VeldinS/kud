'use client';

import { useState } from 'react';

export default function NewEvent() {
    const [name, setName] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [description, setDescription] = useState('');
    const [mainImage, setMainImage] = useState(null);
    const [otherImages, setOtherImages] = useState([]);
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('short_description', shortDescription);
        formData.append('description', description);
        formData.append('main_image', mainImage);
        formData.append('date', date);

        otherImages.forEach((image, index) => {
            formData.append('other_images', image);
        });

        try {
            const response = await fetch('/api/events/create', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                console.log('Event created successfully!');
            } else {
                console.error('Error creating event');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input className={'text-black'} type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Short Description:</label>
                <textarea className={'text-black'} value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea className={'text-black'} value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Main Image:</label>
                <input type="file" accept="image/*" onChange={(e) => setMainImage(e.target.files[0])} required />
            </div>
            <div>
                <label>Other Images:</label>
                <input type="file" accept="image/*" multiple onChange={(e) => setOtherImages([...e.target.files])} />
            </div>
            <div>
                <label>Date:</label>
                <input className={'text-black'} type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <button type="submit">Create Event</button>
        </form>
    );
}
