const courses = [
    {
        id: 1,
        title: 'Master in C Cohort 1.0',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec orci quis justo aliquam euismod eget a leo.',
        modalTarget: 'timeline-modal',
        pdfUrl: '../static/master_c.pdf',
        content: [
            {
                heading: 'Introduction to C',
                details: ['History of C', 'First C Program', 'Setting up the environment']
            },
            {
                heading: 'Control Structures',
                details: ['if-else statements', 'switch case', 'loops']
            },
            {
                heading: 'Advanced Topics',
                details: ['Pointers', 'Memory management', 'Data structures in C']
            },
            {
                heading: 'Many More...',
                details: []
            }
        ]
    },
    {
        id: 2,
        title: 'Data Structures',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec orci quis justo aliquam euismod eget a leo.',
        modalTarget: 'datastructures-modal',
        pdfUrl: '../static/master_c.pdf',
        content: [
            {
                heading: 'Introduction to Data Structures',
                details: ['Arrays', 'Linked Lists', 'Stacks and Queues']
            },
            {
                heading: 'Trees',
                details: ['Binary Trees', 'Binary Search Trees', 'AVL Trees']
            },
            {
                heading: 'Graphs',
                details: ['Graph representations', 'DFS and BFS', 'Shortest path algorithms']
            }
        ]
    },
    {
        id: 3,
        title: 'Web Development Bootcamp',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec orci quis justo aliquam euismod eget a leo.',
        modalTarget: 'webdev-modal',
        pdfUrl: '../static/master_c.pdf',
        content: [
            {
                heading: 'Frontend Development',
                details: ['HTML/CSS Basics', 'JavaScript for Frontend', 'React Basics']
            },
            {
                heading: 'Backend Development',
                details: ['Node.js Basics', 'Express.js', 'Database Integration']
            },
            {
                heading: 'Full-Stack Project',
                details: ['Project setup', 'Frontend and Backend Integration', 'Deployment']
            },
            {
                heading: 'Frontend Development',
                details: ['HTML/CSS Basics', 'JavaScript for Frontend', 'React Basics']
            },
            {
                heading: 'Backend Development',
                details: ['Node.js Basics', 'Express.js', 'Database Integration']
            },
            {
                heading: 'Full-Stack Project',
                details: ['Project setup', 'Frontend and Backend Integration', 'Deployment']
            },
            {
                heading: 'Frontend Development',
                details: ['HTML/CSS Basics', 'JavaScript for Frontend', 'React Basics']
            },
            {
                heading: 'Backend Development',
                details: ['Node.js Basics', 'Express.js', 'Database Integration']
            },
            {
                heading: 'Full-Stack Project',
                details: ['Project setup', 'Frontend and Backend Integration', 'Deployment']
            }
        ]
    }
];

function createCourseElement(course) {
    const courseDiv = document.createElement('div');
    courseDiv.className = 'w-full md:w-1/2 lg:w-1/3 px-4 mb-8';
    courseDiv.setAttribute('data-modal-target', `${course.modalTarget}`);
    courseDiv.setAttribute('data-modal-toggle', `${course.modalTarget}`);
    courseDiv.innerHTML = `
        <div class="rounded-md bg-white shadow-md p-8">
            <div class="grid grid-cols-2 gap-2">
                <div class="text-4xl font-bold text-purple-600 mb-4">0${course.id}
                </div>
                <div class="my-2">
                    <span class="bg-yellow-100 text-yellow-800 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Latest Upcoming</span>
                </div>
            </div>
            <h3 class="text-2xl font-bold mb-4">${course.title}</h3>
            <p class="text-gray-600 mb-4">${course.description}</p>
        </div>
    `;
    return courseDiv;
}

function createModalElement(course) {
    const modalDiv = document.createElement('div');
    modalDiv.id = course.modalTarget;
    modalDiv.tabIndex = '-1';
    modalDiv.className = 'fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] max-h-full';
    modalDiv.innerHTML = `
        <div class="relative w-full max-w-2xl max-h-full mx-auto">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-700">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        ${course.title}
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="${course.modalTarget}">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6 max-h-60 overflow-hidden relative modal-content-wrapper">
                    <div class="modal-content-wrapper">
                        ${course.content.map(section => `
                            <h2 class="text-lg font-semibold text-gray-900 dark:text-white">${section.heading}</h2>
                            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                ${section.details.map(detail => `<li>${detail}</li>`).join('')}
                            </ul>
                        `).join('')}
                    </div>
                    <div class="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-gray-800 to-transparent"></div>
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-4 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600 justify-between">
                    <button id="download-button" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Download Curriculum</button>
                    <button id="see-more-${course.modalTarget}" class="text-blue-500 dark:text-blue-400 underline">See More</button>
                </div>
            </div>
        </div>
    `;
    return modalDiv;
}

function handleSeeMore(modalTarget) {
    const modalContentWrapper = document.querySelector(`#${modalTarget} .modal-content-wrapper`);
    const seeMoreButton = document.getElementById(`see-more-${modalTarget}`);

    if (modalContentWrapper && seeMoreButton) {
        // Expand the content by a fixed amount (e.g., 100px) each time "See More" is clicked
        const currentHeight = modalContentWrapper.style.maxHeight
            ? parseInt(modalContentWrapper.style.maxHeight)
            : 240; // initial max height
        
        const newHeight = currentHeight + 240; // increase by 240px

        // Check if we need to expand further
        if (newHeight >= modalContentWrapper.scrollHeight) {
            modalContentWrapper.style.maxHeight = `${modalContentWrapper.scrollHeight}px`;
            seeMoreButton.style.display = 'none';
        } else {
            modalContentWrapper.style.maxHeight = `${newHeight}px`;
        }
    }
}

const courseContainer = document.getElementById('course-container');
const modalsContainer = document.getElementById('modals-container');

courses.forEach(course => {
    const courseElement = createCourseElement(course);
    courseContainer.appendChild(courseElement);

    const modalElement = createModalElement(course);
	modalsContainer.appendChild(modalElement);

    // Attach event listener for See More button
    const seeMoreButton = document.getElementById(`see-more-${course.modalTarget}`);
    seeMoreButton.addEventListener('click', () => handleSeeMore(course.modalTarget));

    const modals = document.querySelectorAll(`[id^="${course.modalTarget}"]`);

    modals.forEach(modal => {
        modal.addEventListener('click', function (event) {
            if (event.target === modal) { // Detect click outside the modal content
                const modalTarget = modal.getAttribute('id');
                resetModal(modalTarget); // Reset the modal to its initial state
                modal.classList.add('hidden'); // Hide the modal
            }
        });
    });
});


function resetModal(modalTarget) {
    const modalContentWrapper = document.querySelector(`#${modalTarget} .modal-content-wrapper`);
    const seeMoreButton = document.getElementById(`see-more-${modalTarget}`);

    if (modalContentWrapper && seeMoreButton) {
        modalContentWrapper.style.maxHeight = '240px'; // Reset to initial height
        seeMoreButton.style.display = 'inline-block';  // Make "See More" button visible again
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('download-button');
    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            const pdfUrl = '../static/master_c.pdf'; // URL to your PDF file
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'course-details.pdf'; // Name of the file to download
            link.click();
        });
    }
});