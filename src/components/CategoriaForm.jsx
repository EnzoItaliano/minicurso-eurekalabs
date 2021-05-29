import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const CategoriaForm = () => {

  const [form, setForm] = useState({name: ''})

  const handleChange = event => {
    setForm({name: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    alert(form.name)
  }

  return(
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h4'>
            <b>Cadastro de Categorias</b>
          </Typography>
        </Grid>
        <Grid item>
          <TextField 
            variant='outlined'
            label='Nome da Categoria'
            value={form.name}
            required
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <Button type='submit' variant='contained' color='primary'>
            Salvar
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default CategoriaForm