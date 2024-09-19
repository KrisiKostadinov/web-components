class CustomModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
        .modal {
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
        }

        .modal-overlay {
            width: inherit;
            height: inherit;
            background-color: #00000040;
            z-index: -1;
            position: inherit;
            top: 0;
            left: 0;
        }

        .modal-main {
            width: inherit;
            height: inherit;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 100;
        }

        .modal-body {
            height: calc(100% - 174px);
        }

        .modal-content {
            overflow: hidden;
            width: 100%;
            height: 100%;
            max-width: 600px;
            max-height: 400px;
            border-radius: 5px;
            background-color: #fff;
        }
          .modal-content.small {
            max-width: 300px;
          }
          .modal-content.medium {
            max-width: 600px;
          }
          .modal-content.large {
            max-width: 900px;
          }
          .modal-header {
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
          }
          .modal-footer {
            border-top: 1px solid #ddd;
            padding-top: 10px;
            text-align: right;
          }
        </style>
        <div class="modal">
            <div class="modal-overlay" id="modalOverlay"></div>
            <div class="modal-main">
                <div class="modal-content">
                    <div class="modal-header"><slot name="header"></slot></div>
                    <div class="modal-body"><slot name="body"></slot></div>
                    <div class="modal-footer"><slot name="footer"></slot></div>
                </div>
            </div>
        </div>
      `;

        this.modalOverlay = this.shadowRoot.querySelector('#modalOverlay');
        this.modalContent = this.shadowRoot.querySelector('.modal-content');
    }

    connectedCallback() {
        if (this.hasAttribute('screen')) {
            this.modalContent.classList.add(this.getAttribute('screen'));
        }
    }

    open() {
        this.modalOverlay.setAttribute('open', '');
    }

    close() {
        this.modalOverlay.removeAttribute('open');
    }
}

customElements.define('custom-modal', CustomModal);