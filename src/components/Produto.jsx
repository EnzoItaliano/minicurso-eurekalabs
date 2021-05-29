import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core'

const Produto = ({nome, descricao, preco}) => {
    return(
        <Paper style={{padding: 8}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography type="h4" align="center">
                        {nome}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid
                        container
                        spacing={1}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <img
                            src="https://images7.kabum.com.br/produtos/fotos/124417/notebook-acer-aspire-3-intel-core-i3-1005g1-4gb-1tb-windows-10-home-15-6-gray-a315-56-36z1_1599224319_g.jpg"
                            alt="Imagem do Produto"
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="caption">
                        {descricao}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" align="center">
                        R$ {preco}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Produto;