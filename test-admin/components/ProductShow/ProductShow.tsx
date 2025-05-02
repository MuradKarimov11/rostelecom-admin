import {
  Show,
  SimpleShowLayout,
  TextField,
  RichTextField,
  ImageField,
  DeleteButton,
} from 'react-admin'
import './index.css'

const ProductShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <div className='show-actions'>
          <DeleteButton />
        </div>
        <ImageField source='images' src='url' title='desc' />
        <TextField source='name' />
        <TextField source='category' />
        <RichTextField source='description' />
      </SimpleShowLayout>
    </Show>
  )
}

export default ProductShow
