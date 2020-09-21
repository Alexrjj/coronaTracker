import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }}) => {
  if(!confirmed) {
    return 'Carregando...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography align="center" variant="h5" color="textSecondary" gutterBottom>Infectados</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={confirmed.value} duration={2.5} separator="."/>
            </Typography>
            <Typography color="textSecondary">Atualizado: {new Date(lastUpdate).toLocaleString('pt-BR')}</Typography>
            {/* <Typography variant="body2">Número de casos ativos</Typography> */}
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography align="center" variant="h5" color="textSecondary" gutterBottom>Curados</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered.value} duration={2.5} separator="."/>
            </Typography>
            <Typography color="textSecondary">Atualizado: {new Date(lastUpdate).toLocaleString('pt-BR')}</Typography>
            {/* <Typography variant="body2">Número de curados</Typography> */}
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography align="center" variant="h5" color="textSecondary" gutterBottom>Mortos</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths.value} duration={2.5} separator="."/>
            </Typography>
            <Typography color="textSecondary">Atualizado: {new Date(lastUpdate).toLocaleString('pt-BR')}</Typography>
            {/* <Typography variant="body2">Número de mortos</Typography> */}
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards;