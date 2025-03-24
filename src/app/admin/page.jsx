"use client"
import React from 'react';
import AdminHome from "@/components/admin/home";
import AdminAbout from "@/components/admin/about";
import AdminContact from "@/components/admin/contact";
import Education from "@/components/admin/education";
import Experience from "@/components/admin/expirience";
import Project from "@/components/admin/project/project";

const AdminView = () => {
    const menuItem = [
        {
            id: 'home',
            label: 'Home',
            component: <AdminHome/>
        },
        {
            id: 'about',
            label: 'About',
            component: <AdminAbout/>
        },
        {
            id: 'contact',
            label: 'Contact',
            component: <AdminContact/>
        },
        {
            id: 'education',
            label: 'Education',
            component: <Education/>
        },
        {
            id: 'experience',
            label: 'Experience',
            component: <Experience/>
        },
        {
            id: 'projects',
            label: 'Projects',
            component: <Project/>
        }
    ]
    return (
        <div>
        <h1>Admin</h1>
        </div>
    );
};

export default AdminView;