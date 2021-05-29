import { Button, Grid, Typography, TextField } from '@material-ui/core';
import React, { useState } from 'react'

const ProdutoForm = () => {
    const [form, setForm] = useState({
        nome:"",
        preco:0,
        descricao:"",
        img:""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3} alignItems='center' justify="center">
                <Grid item xs={12}>
                    <Typography align="center" variant="h4">
                        <b>Cadastro de Produto</b>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        variant="outlined"
                        value={form.name}
                        onChange={(e) => setForm({...form, nome: e.target.value})}
                        required
                        fullWidth
                        label="Nome do Produto"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        variant="outlined"
                        value={form.descricao}
                        onChange={(e) => setForm({...form, descricao: e.target.value})}
                        required
                        fullWidth
                        label="Descrição do Produto"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        variant="outlined"
                        value={form.preco}
                        onChange={(e) => setForm({...form, preco: e.target.value})}
                        required
                        fullWidth
                        label="Preço do Produto"
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Button
                        variant="outlined"
                        color="primary"
                        type="submit"
                        fullWidth
                    >
                        Salvar
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default ProdutoForm