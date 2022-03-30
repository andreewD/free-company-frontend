import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { FC, useState } from 'react'
import './styles.scss'

interface FilterProps {
  label: string
  title: string
}

const Filter: FC<FilterProps> = (props) => {
  const [open, setOpen] = useState(true)
  const { label, title } = props
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div className="bodyListFilters">
      <label className="labelFilter">{label}</label>
      <div className="listFilterContainer">
        <List
          sx={{ width: '100%', bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleClick}>
            <ListItemText className="titleFilter" primary={title} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </div>
    </div>
  )
}

export default Filter
