import React, { useState, useEffect } from 'react';
import '../style/project.css';
import useAxiosPrivate from "../hooks/useAxiosPrivate";

function Project(props) {
    const axiosPrivate = useAxiosPrivate();

    const handleDelete = async (id) => {
        try {
            const response = await axiosPrivate.delete(
                `/projects/${id}`
            );
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="project">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>{props.members}</p>
            <button onClick={() => handleDelete(props._id)}>Delete</button>
        </div>
    )
}

export default Project;

