import { Icon } from 'semantic-ui-react';

export default function CoverUpload({ handleFileChange }){
  return(
    <div className='new-cover-upload' style={{
      margin: 'auto',
      width:'50%',
      height:'86px',
      margin:'auto',
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      textAlign: 'center'
    }}>
      <label htmlFor="file-input" name='imageFile'>
        <Icon size='huge' name='image' htmlFor='file-input' style={{color: 'grey', cursor: 'pointer'}}>
        </Icon>
        <span style={{color: '#6f6f6f', cursor: 'pointer'}}>Agregar portada</span>
      </label>
      <input type="file" id='file-input' style={{display: 'none'}}  onChange={handleFileChange} />
    </div>
  )
}
