// Project: test-admin
import {
  Datagrid,
  Identifier,
  List,
  NumberField,
  RaRecord,
  TextField,
} from 'react-admin'

export const GoodsList = () => {
  const handleRowClick = (
    _id: Identifier,
    _resource: string,
    record: RaRecord
  ) => {
    localStorage.setItem('show', JSON.stringify(record.category))

    return 'show'
  }

  return (
    <List>
      <Datagrid rowClick={handleRowClick}>
        <TextField source='id' />
        <TextField source='category' />
        <TextField source='type' />
        <NumberField source='price' />
        <TextField source='name' />
      </Datagrid>
    </List>
  )
}
