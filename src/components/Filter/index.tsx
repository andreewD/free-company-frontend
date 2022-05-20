import styled from 'styled-components'
import { FC, useState } from 'react'
import { Menu, Checkbox, Divider } from 'antd'

const CustomFilter = styled.div`
  display: flex;
  flex-direction: column;
  .ant-checkbox-inner {
    background-color: white;
    border-color: black !important;
    &::after {
      border-color: black;
    }
  }
  .ant-checkbox-indeterminate{
    .ant-checkbox-inner::after{
      background-color: #585858 !important;
    }
  }
  .ant-checkbox-checked {
    border-color: black !important;
    &::after {
      border-color: black;
    }
  }

  .ant-checkbox {
    border-color: black !important;
  }

  }
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
  setFilter: any
}
const CheckboxGroup = Checkbox.Group
const { SubMenu } = Menu

const CustomCheckboxContent = styled.div`
  padding: 1rem 24px;
  * {
    font-size: 20px;
  }
`

const rootSubmenuKeys = ['sub1']
const Filter: FC<FilterProps> = (props) => {
  const { label, title, setFilter, options } = props
  const [openKeys, setOpenKeys] = useState(['sub1'])

  const onOpenChange = (keys: any) => {
    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }
  const plainOptions = options.map((e) => e.name)
  const defaultCheckedList: any = []
  const [checkedList, setCheckedList] = useState<string[] | []>(
    defaultCheckedList
  )
  const [indeterminate, setIndeterminate] = useState(false)
  const [checkAll, setCheckAll] = useState(false)

  const onChanges = (list: any) => {
    setCheckedList(list)
    setFilter(list)
    setIndeterminate(!!list.length && list.length < plainOptions.length)
    setCheckAll(list.length === plainOptions.length)
  }

  const onCheckAllChange = (e: { target: { checked: boolean } }) => {
    setCheckedList(e.target.checked ? plainOptions : [])
    setFilter(e.target.checked ? plainOptions : [])
    setIndeterminate(false)
    setCheckAll(e.target.checked)
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
            <CustomCheckboxContent>
              <Checkbox
                indeterminate={indeterminate}
                onChange={onCheckAllChange}
                checked={checkAll}
              >
                Seleccionar todos.
              </Checkbox>
              <Divider style={{ margin: '12px 0' }} />
              <CheckboxGroup
                options={plainOptions}
                value={checkedList}
                style={{ display: 'flex', flexDirection: 'column' }}
                defaultValue={checkedList}
                onChange={onChanges}
              />
            </CustomCheckboxContent>
          </SubMenu>
        </Menu>
      </CustomMenu>
    </CustomFilter>
  )
}

export default Filter
