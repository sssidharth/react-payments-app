import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import TasksIcon from "../../Assets/mingcute_task-fill.svg";
import {
  faClose,
  faHome,
  faMoneyBillTransfer,
  faUser,
  faMoneyBillTrendUp,
  faCreditCard,
  faHandHoldingDollar,
  faScrewdriverWrench,
  faLightbulb,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [tabs, setTabs] = useState([
    {
      name: "Dashboard",
      icon: <FontAwesomeIcon className="size-5 mr-4" icon={faHome} />,
      active: false,
      path: "/",
    },
    {
      name: "Transactions",
      icon: (
        <FontAwesomeIcon className="size-5 mr-4" icon={faMoneyBillTransfer} />
      ),
      active: false,
      path: "/transactions",
    },
    {
      name: "Accounts",
      icon: <FontAwesomeIcon className="size-5 mr-4" icon={faUser} />,
      active: false,
      path: "/accounts",
    },
    {
      name: "Investments",
      icon: (
        <FontAwesomeIcon className="size-5 mr-4" icon={faMoneyBillTrendUp} />
      ),
      active: false,
      path: "/investments",
    },
    {
      name: "Credit Cards",
      icon: <FontAwesomeIcon className="size-5 mr-4" icon={faCreditCard} />,
      active: false,
      path: "/cards",
    },
    {
      name: "Loans",
      icon: (
        <FontAwesomeIcon className="size-5 mr-4" icon={faHandHoldingDollar} />
      ),
      active: false,
      path: "/loans",
    },
    {
      name: "Services",
      icon: (
        <FontAwesomeIcon className="size-5 mr-4" icon={faScrewdriverWrench} />
      ),
      active: false,
      path: "/services",
    },
    {
      name: "My Privileges",
      icon: <FontAwesomeIcon className="size-5 mr-4" icon={faLightbulb} />,
      active: false,
      path: "/privileges",
    },
    {
      name: "Settings",
      icon: <FontAwesomeIcon className="size-5 mr-4" icon={faGear} />,
      active: false,
      path: "/settings",
    },
  ]);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setTabs((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        active: currentPath === tab.path,
      }))
    );
  }, []);

  const handleTabChange = (name) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        active: tab.name === name,
      }))
    );
  };

  const renderTabs = (tab, index) => {
    return (
      <li className="h-14 flex flex-row justify-between" key={index}>
        {tab.active ? (
          <p className="h-full w-2.5 rounded-r-lg bg-black"></p>
        ) : null}
        <NavLink
          onClick={() => handleTabChange(tab.name)}
          to={tab.path}
          className={({ isActive }) =>
            isActive ? "nav_elements_active" : "nav_elements_inactive"
          }
        >
          {tab.icon}
          {tab.name}
        </NavLink>
      </li>
    );
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`sidebar_base ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 w-72 border-r-2-border_color`}
      >
        <div>
          <div className="p-6 flex items-center pl-12">
            <img className="size-8 mr-2" src={TasksIcon} alt="taskIcon" />
            <h1 className="text-xl font-bold">Soar Task</h1>
            <FontAwesomeIcon
              onClick={toggleSidebar}
              icon={faClose}
              className="ml-7 md:hidden text-gray-500 hover:font-semibold hover:text-black cursor-pointer"
            />
          </div>
          <ul className="space-y-4">
            {tabs.map((tab, index) => renderTabs(tab, index))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
