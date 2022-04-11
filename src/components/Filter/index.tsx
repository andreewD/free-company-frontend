import styled from 'styled-components'
import { FC, useState } from 'react'
import CheckBox from './../CheckBox'
import { Menu } from 'antd'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'

const CustomFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  span {
    &:hover {
      color: black;
    }
  }
  ul {
    background: white !important;
    width: auto !important;
  }
  .labelFilter {
    margin: 0 1.5rem;
    font-size: 1.25rem;
  }
  .ant-menu-item {
    padding-left: 24px !important;
  }
  .ant-menu-item-selected {
    background: none !important;
    color: black;
  }
  .ant-menu-item::after {
    border-right: none !important;
  }
  .ant-menu-submenu-title {
    font-size: 20px !important;
    * {
      color: #5c5d61 !important;
    }
  }
`
const CustomMenu = styled.div`
  & > * {
    border-radius: 2rem;
    overflow: hidden !important;
    padding: 4px 8px;
  }
`
interface Option {
  id: string
  name: string
}
interface FilterProps {
  label: string
  title: string
  options: Option[] | []
  name: string
  onChange?(e: CheckboxChangeEvent): void
}

const { SubMenu } = Menu

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']
const Filter: FC<FilterProps> = (props) => {
  const { label, title, options, name, onChange } = props
  const [openKeys, setOpenKeys] = useState(['sub1'])

  const onOpenChange = (keys: any) => {
    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  return (
    <CustomFilter>
      <label className="labelFilter">{label}</label>
      <CustomMenu>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{ width: 256 }}
        >
          <SubMenu key="sub1" title={title}>
            {options.map((e) => {
              return (
                <Menu.Item key={e.id}>
                  <CheckBox
                    id={e.id}
                    label={e.name}
                    onChange={onChange}
                    name={name}
                  />
                </Menu.Item>
              )
            })}
          </SubMenu>
        </Menu>
      </CustomMenu>
    </CustomFilter>
  )
}

export default Filter
