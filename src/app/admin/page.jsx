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
        },
    ];
    return (
        <div className='border border-gray-400'>
            <nav className='-mb-0.5 flex justify-center space-x-6' role='talist'>
                {menuItem.map((item, index) => (
                    <button key={item.id} type='button' className='p-4 font-bold text-xl text-black cursor-pointer'>{item.label}</button>
                ))}

            </nav>
            <div className='mt-10 p-10'>

            </div>

        </div>
    );
};

export default AdminView;