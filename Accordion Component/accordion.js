class AccordionItem extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Create accordion item structure
        const wrapper = document.createElement('div');
        wrapper.classList.add('accordion-item');

        const header = document.createElement('button');
        header.classList.add('accordion-header');
        header.textContent = this.getAttribute('header');
        wrapper.appendChild(header);

        const content = document.createElement('div');
        content.classList.add('accordion-content');
        content.innerHTML = `<slot></slot>`;
        wrapper.appendChild(content);

        // Add CSS
        const style = document.createElement('style');
        style.textContent = `
            .accordion-item {
                margin-bottom: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
            }
            .accordion-header {
                width: 100%;
                padding: 15px;
                background-color: #f1f1f1;
                border: none;
                text-align: left;
                font-size: 18px;
                cursor: pointer;
                outline: none;
                transition: background-color 0.3s ease;
            }
            .accordion-header:hover {
                background-color: #ddd;
            }
            .accordion-content {
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.3s ease;
                padding-left: 15px;
                padding-right: 15px;
                background-color: #fff;
            }
            .accordion-content p {
                padding: 15px 0;
            }
        `;
        shadow.appendChild(style);
        shadow.appendChild(wrapper);

        // Event listener for toggle
        header.addEventListener('click', () => {
            const isActive = header.classList.toggle('active');
            if (isActive) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = 0;
            }
        });
    }
}

class Accordion extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.classList.add('accordion');
        
        const style = document.createElement('style');
        style.textContent = `
            .accordion {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }

    connectedCallback() {
        const wrapper = this.shadowRoot.querySelector('.accordion');
        [...this.children].forEach(child => {
            wrapper.appendChild(child);
        });
    }
}

// Define custom elements
customElements.define('accordion-item', AccordionItem);
customElements.define('custom-accordion', Accordion);