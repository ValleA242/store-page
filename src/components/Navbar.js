import { Button, Navbar, Container, Modal } from "react-bootstrap";
import { useState } from "react";

export default function NavbarComponent() {
    return (
        <>
            <Navbar expand="sm">
                <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button>Cart 0 Items</Button>
                </Navbar.Collapse>
            </Navbar>

            <Modal show={show} onHide={handleClose}>

            </Modal>
        </>
    )
}