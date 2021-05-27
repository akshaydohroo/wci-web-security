import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { IoLogoPlaystation } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Collapse from "react-bootstrap/Collapse";
import styles from "./NavBar.module.css";
function NavBar() {
  const navHeight = React.useRef(null);
  // const [hasBackgroundColor, setBackGroundColor] = React.useState(false);
 

  const [collapse, setCollapse] = React.useState(true);
  const onClickCollapseHandler = () => {
    setCollapse((oldValue) => {
      return !oldValue;
    });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event);
  };
  const [colorChange, setColorchange] = React.useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 10){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <Navbar
      expand="lg"
      variant="light"
      className={styles["app-nav"]}
      ref={navHeight}
      {...colorChange ? {bg:"light"}:{bg:"none"}}
    >
      <Navbar.Brand href="#home" className="ml-2">
        <IoLogoPlaystation size={38} />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className={styles["toggle-btn"]}
      />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className={styles["collapse-content"]}
      >
        <Nav className={styles["nav-items"]}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
          <Nav.Link href="#link">Trends</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    
      <Form inline className={styles["search-form"]} onSubmit={onSubmitHandler}>
        <InputGroup>
          <Collapse in={collapse} dimension="width" style={{transitionDuration:"1s"}}>
            <div>
              <FormControl
                id="inlineFormInputGroup"
                placeholder="Username"
                className={styles["search-form-control"]}
              />
            </div>
          </Collapse>
          <InputGroup.Append className={styles["search-form-input-group"]}>
            <Button
              variant="outline-primary"
              onClick={onClickCollapseHandler}
              className={styles["search-form-button"]}
            >
              <FaSearch />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </Navbar>
  );
}

export default NavBar;
