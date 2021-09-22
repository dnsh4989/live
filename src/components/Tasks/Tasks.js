import React, { useEffect } from "react";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import { collection, getDocs, doc, onSnapshot } from "firebase/firestore";

import { firebaseDB, fireStore } from "../../firebase";

function Tasks() {
  useEffect(() => {
    console.log("hey.!");
    let unsubscribe = onSnapshot(
      collection(fireStore, "tasks"),
      (querySnapshot) => {
        let tasks = [];
        querySnapshot.forEach((doc) => {
          tasks.push(doc.data());
          console.log(doc);
        });
        console.log(tasks);
      }
    );

    return unsubscribe;
  }, []);

  return (
    <Card className="card-tasks">
      <Card.Header>
        <Card.Title as="h4">Tasks</Card.Title>
        <p className="card-category">Frontend development</p>
      </Card.Header>
      <Card.Body>
        <div className="table-full-width">
          <Table>
            <tbody>
              <tr>
                <td>
                  <Form.Check className="mb-1 pl-0">
                    <Form.Check.Label>
                      <Form.Check.Input
                        defaultValue=""
                        type="checkbox"
                      ></Form.Check.Input>
                      <span className="form-check-sign"></span>
                    </Form.Check.Label>
                  </Form.Check>
                </td>
                <td>
                  Sign contract for "What are conference organizers afraid of?"
                </td>
                <td className="td-actions text-right">
                  <OverlayTrigger
                    overlay={
                      <Tooltip id="tooltip-488980961">Edit Task..</Tooltip>
                    }
                  >
                    <Button
                      className="btn-simple btn-link p-1"
                      type="button"
                      variant="info"
                    >
                      <i className="fas fa-edit"></i>
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip-506045838">Remove..</Tooltip>}
                  >
                    <Button
                      className="btn-simple btn-link p-1"
                      type="button"
                      variant="danger"
                    >
                      <i className="fas fa-times"></i>
                    </Button>
                  </OverlayTrigger>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Check className="mb-1 pl-0">
                    <Form.Check.Label>
                      <Form.Check.Input
                        defaultChecked
                        defaultValue=""
                        type="checkbox"
                      ></Form.Check.Input>
                      <span className="form-check-sign"></span>
                    </Form.Check.Label>
                  </Form.Check>
                </td>
                <td>
                  Lines From Great Russian Literature? Or E-mails From My Boss?
                </td>
                <td className="td-actions text-right">
                  <OverlayTrigger
                    overlay={
                      <Tooltip id="tooltip-537440761">Edit Task..</Tooltip>
                    }
                  >
                    <Button
                      className="btn-simple btn-link p-1"
                      type="button"
                      variant="info"
                    >
                      <i className="fas fa-edit"></i>
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip-21130535">Remove..</Tooltip>}
                  >
                    <Button
                      className="btn-simple btn-link p-1"
                      type="button"
                      variant="danger"
                    >
                      <i className="fas fa-times"></i>
                    </Button>
                  </OverlayTrigger>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Check className="mb-1 pl-0">
                    <Form.Check.Label>
                      <Form.Check.Input
                        defaultChecked
                        defaultValue=""
                        type="checkbox"
                      ></Form.Check.Input>
                      <span className="form-check-sign"></span>
                    </Form.Check.Label>
                  </Form.Check>
                </td>
                <td>
                  Flooded: One year later, assessing what was lost and what was
                  found when a ravaging rain swept through metro Detroit
                </td>
                <td className="td-actions text-right">
                  <OverlayTrigger
                    overlay={
                      <Tooltip id="tooltip-577232198">Edit Task..</Tooltip>
                    }
                  >
                    <Button
                      className="btn-simple btn-link p-1"
                      type="button"
                      variant="info"
                    >
                      <i className="fas fa-edit"></i>
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip-773861645">Remove..</Tooltip>}
                  >
                    <Button
                      className="btn-simple btn-link p-1"
                      type="button"
                      variant="danger"
                    >
                      <i className="fas fa-times"></i>
                    </Button>
                  </OverlayTrigger>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Check className="mb-1 pl-0">
                    <Form.Check.Label>
                      <Form.Check.Input
                        defaultChecked
                        type="checkbox"
                      ></Form.Check.Input>
                      <span className="form-check-sign"></span>
                    </Form.Check.Label>
                  </Form.Check>
                </td>
                <td>
                  Create 4 Invisible User Experiences you Never Knew About
                </td>
                <td className="td-actions text-right">
                  <OverlayTrigger
                    overlay={
                      <Tooltip id="tooltip-422471719">Edit Task..</Tooltip>
                    }
                  >
                    <Button
                      className="btn-simple btn-link p-1"
                      type="button"
                      variant="info"
                    >
                      <i className="fas fa-edit"></i>
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip-829164576">Remove..</Tooltip>}
                  >
                    <Button
                      className="btn-simple btn-link p-1"
                      type="button"
                      variant="danger"
                    >
                      <i className="fas fa-times"></i>
                    </Button>
                  </OverlayTrigger>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Check className="mb-1 pl-0">
                    <Form.Check.Label>
                      <Form.Check.Input
                        defaultValue=""
                        type="checkbox"
                      ></Form.Check.Input>
                      <span className="form-check-sign"></span>
                    </Form.Check.Label>
                  </Form.Check>
                </td>
                <td>Read "Following makes Medium better"</td>
                <td className="td-actions text-right">
                  <OverlayTrigger
                    overlay={
                      <Tooltip id="tooltip-160575228">Edit Task..</Tooltip>
                    }
                  >
                    <Button
                      className="btn-simple btn-link p-1"
                      type="button"
                      variant="info"
                    >
                      <i className="fas fa-edit"></i>
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip-922981635">Remove..</Tooltip>}
                  >
                    <Button
                      className="btn-simple btn-link p-1"
                      type="button"
                      variant="danger"
                    >
                      <i className="fas fa-times"></i>
                    </Button>
                  </OverlayTrigger>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Check className="mb-1 pl-0">
                    <Form.Check.Label>
                      <Form.Check.Input
                        defaultValue=""
                        disabled
                        type="checkbox"
                      ></Form.Check.Input>
                      <span className="form-check-sign"></span>
                    </Form.Check.Label>
                  </Form.Check>
                </td>
                <td>Unfollow 5 enemies from twitter</td>
                <td className="td-actions text-right">
                  <OverlayTrigger
                    overlay={
                      <Tooltip id="tooltip-938342127">Edit Task..</Tooltip>
                    }
                  >
                    <Button
                      className="btn-simple btn-link p-1"
                      type="button"
                      variant="info"
                    >
                      <i className="fas fa-edit"></i>
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip-119603706">Remove..</Tooltip>}
                  >
                    <Button
                      className="btn-simple btn-link p-1"
                      type="button"
                      variant="danger"
                    >
                      <i className="fas fa-times"></i>
                    </Button>
                  </OverlayTrigger>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card.Body>
      <Card.Footer>
        <hr></hr>
        <div className="stats">
          <i className="now-ui-icons loader_refresh spin"></i>
          Updated 3 minutes ago
        </div>
      </Card.Footer>
    </Card>
  );
}

export default Tasks;
