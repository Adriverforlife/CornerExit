import { Container, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Home, ImportContacts, Send, Instagram, Email, Facebook } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router';
import LinkCard from '../Components/LinkCard'


export default function Notes() {
  const history = useHistory();

  const menuItems = [
    {text:"Email",
    icon:<Home />,
    path:<ListItem><ListItemIcon><Email /></ListItemIcon><ListItemText primary="Michael@Corner-Exit.com" /></ListItem>,
    },
    {text:"Instagram",
    icon:<ImportContacts />,
    path:<ListItem><ListItemIcon><Instagram /></ListItemIcon><ListItemText primary="@Corner-Exit" /></ListItem>,
    },
    {text:"Facebook",
    icon:<Send />,
    path:<ListItem><ListItemIcon><Facebook /></ListItemIcon><ListItemText primary="Corner Exit Event Services" /></ListItem>,
},
]

  return (
    <Container>
      {menuItems.map(item => (
        <LinkCard
          key={item.text} 
          title={item.text}
          body={item.path}
          >
              
              <ListItemText primary={item.text} />
          </LinkCard>
    ))}

  </Container>
)
}
