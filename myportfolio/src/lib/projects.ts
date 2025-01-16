export const projects = [
	{
		slug: 'project1',
		title: 'KUREN',
		idea: 'This project explores simplifying user workflows.',
		process: 'Research, wireframing, and iterative prototyping.',
		result: 'A seamless, user-friendly application.',
		images: ['/image1.png', '/image2.png']
	},
	{
		slug: 'project2',
		title: 'ReHub',
		idea: 'This project focuses on rehabilitation workflows.',
		process: 'Data analysis, design sprints, and testing.',
		result: 'An app improving accessibility for patients.',
		images: ['/image3.png', '/image4.png']
	}
];

import { error } from '@sveltejs/kit';

export function load({ params }: { params: { slug: string } }) {
	const project = projects.find((p) => p.slug === params.slug);

	if (!project) {
		throw error(404, 'Project not found');
	}

	return { project };
}
