import {
  FaBars,
  FaChartBar,
  FaHandHoldingUsd,
  FaRegUserCircle,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { GiMoneyStack, GiCycle } from "react-icons/gi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { FcCalendar } from "react-icons/fc";
import "../styles/sideBar.css";
import { Col, Row } from "react-bootstrap";

export function SideBar() {
  return (
    <>
      <Row>
        <Col
          xl={2}
          className="d-flex flex-column"
          style={{ backgroundColor: "#EDF8FE" }}
        >
          <FaRegUserCircle style={{ fontSize: "30px" }} />
          <GiMoneyStack style={{ fontSize: "30px" }} />
          <FaHandHoldingUsd style={{ fontSize: "30px" }} />
          <FaUmbrellaBeach style={{ fontSize: "30px" }} />
          <FcCalendar style={{ fontSize: "30px" }} />
          <FaChartBar style={{ fontSize: "30px" }} />
          <HiOutlineClipboardList style={{ fontSize: "30px" }} />
          <FaBars style={{ fontSize: "30px" }} />
          <GiCycle style={{ fontSize: "30px" }} />
        </Col>
      </Row>
    </>
  );
}
