class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <ul class="nav_links">
                <div class="leftNav">
                <li><a href="../sites/index.html">Home</a></li>
                </div>
                <li><a href="../sites/phoenix.html">Phoenix</a></li>
                <li><a href="../sites/brimstone.html">Brimstone</a></li>
                <li><a href="../sites/viper.html">Viper</a></li>
                <li><a href="../sites/reyna.html">Reyna</a></li>
                <li><a href="../sites/raze.html">Raze</a></li>
            </ul>
        </nav>
        `
    }
}

customElements.define('my-header',MyHeader)
