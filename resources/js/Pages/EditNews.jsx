import React, { useState } from "react";
import { Head, router } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

export default function Homepage(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id,
            title: title || props.myNews.title,
            description: description || props.myNews.description,
            category: category || props.myNews.category,
        };
        router.post("/news/update", data);

        // Reset form hanya jika diperlukan
        setTitle("");
        setDescription("");
        setCategory("");
    };
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="card w-full  bg-base-100 shadow-xl m-2">
                <div className="p-4 text-2xl">EDIT BERITA</div>
                <div className="card-body">
                    <input
                        type="text"
                        placeholder="Judul"
                        className="m-2 input input-bordered w-full"
                        onChange={(title) => setTitle(title.target.value)}
                        defaultValue={props.myNews.title}
                    />
                    <input
                        type="text"
                        placeholder="Deskripsi"
                        className="m-2 input input-bordered w-full"
                        onChange={(description) =>
                            setDescription(description.target.value) ||
                            props.myNews.description
                        }
                        defaultValue={props.myNews.description}
                    />
                    <input
                        type="text"
                        placeholder="Kategori"
                        className="m-2 input input-bordered w-full"
                        onChange={(category) =>
                            setCategory(category.target.value) ||
                            props.myNews.category
                        }
                        defaultValue={props.myNews.category}
                    />
                    <button
                        className="btn btn-primary m-2"
                        onClick={() => handleSubmit()}
                    >
                        UPDATE
                    </button>
                </div>
            </div>
        </div>
    );
}
