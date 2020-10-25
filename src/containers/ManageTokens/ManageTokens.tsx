import React, { useState } from 'react'

import useStyles from './style'
import { FormControl, Grid, InputLabel, Select, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { currentGovernedTokens } from '@selectors/solanaWallet'
import { actions } from '@reducers/modals'
import TokenInfo from '@components/TokenInfo/TokenInfo'
import CommonButton from '@components/CommonButton/CommonButton'

const ManageTokensPage: React.FC = () => {
  const classes = useStyles()
  const tokens = useSelector(currentGovernedTokens)
  const dispatch = useDispatch()
  const [selectedToken, setSelectedToken] = useState(tokens[0])
  return (
    <Grid container className={classes.contentContainer} justify='center'>
      <Grid item xs={12} className={classes.contentWrapper}>
        <Grid container className={classes.root}>
          <Grid item xs={12} className={classes.titleDiv}>
            <Grid container justify='space-between' alignItems='center'>
              <Grid item>
                <Typography variant='h4' color='primary' className={classes.title}>
                  Manage tokens
                </Typography>
              </Grid>
              <Grid item>
                <CommonButton
                  name='Create Token #'
                  className={classes.createTokenButton}
                  onClick={() => {
                    dispatch(actions.openModal('createToken'))
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <FormControl variant='outlined' className={classes.selectedTokenDiv}>
              <InputLabel className={classes.selectLabel}>Selected token</InputLabel>
              <Select
                native
                value={selectedToken.programId}
                onChange={e => {
                  const token = tokens.find(t => t.programId === (e.target.value as string))
                  if (token) {
                    setSelectedToken(token)
                  }
                }}
                label='Selected token'
                classes={{ icon: classes.iconSelect }}>
                {tokens.map(token => (
                  <option value={token.programId}>{token.programId}</option>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} className={classes.tokenInfo}>
            <TokenInfo
              address={selectedToken.programId}
              freezeAuthority={selectedToken.freezeAuthority}
              decimals={selectedToken.decimals}
              mintAuthority={selectedToken.mintAuthority}
              supply={selectedToken.supply}
              onMint={() => {}}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ManageTokensPage
