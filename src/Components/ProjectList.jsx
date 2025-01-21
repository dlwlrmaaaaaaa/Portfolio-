import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, proj1, proj2, proj3, proj4, proj5, proj6 } from './icons';
const images = [proj1, proj2, proj3, proj4, proj5, proj6, pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10];

const projects = [
    // Add your project images here
    { id: 1, src: "path/to/image1.jpg", alt: "Project 1" },
    { id: 2, src: "path/to/image2.jpg", alt: "Project 2" },
    { id: 3, src: "path/to/image3.jpg", alt: "Project 3" },
    // Add more images as needed
];

const Projects = () => {
    return (
        <>
            <div className="min-h-screen bg-white flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-8">My Projects</h1>
                <div className="w-full flex flex-wrap justify-center gap-4 p-4">
                    {images.map((project) => (
                        <div key={project.id} className="w-64 h-64 overflow-hidden rounded-lg shadow-lg">
                            <img
                                src={project}
                                alt={project}
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Projects;