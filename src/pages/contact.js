import { Container, Link, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Home, ImportContacts, Send, Instagram, Email, Facebook } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router';
import LinkCard from '../Components/LinkCard'


export default function Notes() {
  const history = useHistory();

  const menuItems = [
    {text:"Email",
    icon:<Home />,
    path:<Link href='mailto:Michael@Corner-Exit.com' target="_blank"><ListItemText primary="Michael@Corner-Exit.com" /></Link>,
    },
    {text:"Instagram",
    icon:<ImportContacts />,
    path:<Link href='https://www.instagram.com/corner_exit/' target="_blank"><ListItemText primary="@Corner_Exit" /></Link>,
    },
    {text:"Facebook",
    icon:<Send />,
    path:<Link href='www.facebook.com/CornerExitEventServices target="_blank"'><ListItemText primary="Corner Exit Event Services" /></Link>,
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
