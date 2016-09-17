import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {Navbar} from 'react-bootstrap';
import MetisMenu from 'react-metismenu';
class Sidebar extends React.Component{

  render(){
    const content = [
    {
        icon: 'dashboard fa-fw',
        label: 'Dashboard',
        to: '/'
    },
    {
        icon: 'bar-chart-o fa-fw',
        label: 'Charts',
        content: [
            {
                icon: 'area-chart fa-fw',
                label: 'High Chart area',
                href: '#another-link'
            },
            {
                icon: 'pie-chart fa-fw',
                label: 'High Chart pie',
                href: '#another-link'
            }
        ]
    },
    {
        icon: 'table fa-fw',
        label: 'Tables',
        to: 'tables'
    },
    {
        icon: 'edit fa-fw',
        label: 'Forms',
        to: 'forms'
    },
    {
        icon: 'wrench fa-fw',
        label: 'UI Elements',
        content: [
            {
                label: 'Panel and Wells',
                to: 'panel-wells'
            },
            {
                label: 'Button',
                to: 'buttons'
            },
            {
                label: 'Notifications',
                to: 'notifications'
            },
            {
                label: 'Typography',
                to: 'typographies'
            },
            {
                label: 'Icons',
                to: 'icons'
            },
            {
                label: 'Grid',
                to: 'grids'
            }
        ]
    },
    {
        icon: 'sitemap fa-fw',
        label: 'Multi Level Dropdown',
        content: [
            {
                label: 'Second Level Item',
                to: '#another-link'
            },
            {
                label: 'Second Level Item',
                to: '#another-link'
            },
            {
              label: 'Third Level',
              content: [
                  {
                      label: 'Third Level Item',
                      to: '#another-link'
                  },
                  {
                      label: 'Third Level Item',
                      to: '#another-link'
                  },
                  {
                      label: 'Third Level Item',
                      to: '#another-link'
                  },
                  {
                      label: 'Third Level Item',
                      to: '#another-link'
                  }
              ]
            }
        ]
    },
    {
        icon: 'files-o fa-fw',
        label: 'Sample Pages',
        content: [
            {
                label: 'Blank Page',
                to: 'blank'
            },
            {
                label: 'Login Page',
                to: 'login'
            },
            {
              label:'Course Page',
              to:'courses'
            }
        ]
    }
  ];
    return (
    <div className="navbar-default sidebar" role="navigation">
        <Navbar.Collapse>
          <MetisMenu content={content}/>
        </Navbar.Collapse>
    </div>
    );
  }
}
export default Sidebar;
