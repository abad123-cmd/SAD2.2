class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // currentPage
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div class="container-fluid">
                    <img src="../static/logo/logo.svg" alt="logo" class="mx-3 logo_icon">
                    <div>
                        <h1 class="logo_title mb-0">JCTrucking Company</h1>
                        <div class="logo_subtitle">WE TAKE THE LOAD OFF YOUR BACK</div>
                    </div>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/admindashboard">Dashboard</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/add-truck">Add Truck</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" href="/customer">Customer</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" href="/tracker">Tracker</a>
                            </li>

                            
                            <li class="nav-item">
                                <a class="nav-link" href="/userManagement">User Management</a>
                            </li>
                            
                            <li class="nav-item dropdown d-none d-lg-block">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    <img src="../static/logo/account_circle.svg" alt="logo" width="25" height="25" class="mx-1 ms-4">
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item onHoverDropdown" href="#profile">Profile</a></li>
                                    <li><a class="dropdown-item onHoverDropdown" href="#changePassword">Change Password</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item onHoverDropdown" href="#logOut">Log Out</a></li>
                                </ul>
                            </li>
                            <!-- For mobile view -->
                            <li class="nav-item d-block d-lg-none border-top border-secondary">
                                <a class="nav-link" href="#profile">Profile</a>
                            </li>
                            <li class="nav-item d-block d-lg-none">
                                <a class="nav-link" href="#changePassword">Change Password</a>
                            </li>
                            <li class="nav-item d-block d-lg-none">
                                <a class="nav-link" href="#logOut">Log Out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `
        document.body.insertAdjacentHTML('afterbegin', navbar);
    }
}

customElements.define("navbar-component", Navbar);