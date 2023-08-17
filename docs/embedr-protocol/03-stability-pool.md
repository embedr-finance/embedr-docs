---
sidebar_position: 3
title: Stability Pool
---

# Stability Pool

Stability Pool is the first line of defense in maintaining system solvency. It achieves that by acting as the source of liquidity to repay debt from liquidated Kasas — ensuring that the total `rUSD` supply always remains backed.

When a Kasa is liquidated, the debt is repaid by burning `rUSD` from the Stability Pool. The liquidated Kasa's collateral is then distributed to Stability Pool providers as liquidation gain. Read more about liquidations [here](/embedr-protocol/stable-coin-factory#liquidating-kasas).

Users can deposit `rUSD` into the Stability Pool to earn a share of the liquidation gains. The more `rUSD` a user deposits, the higher their share of the pool and liquidation gains.

## Core Functionality

- [**Staking rUSD**](#stake-rusd): Users can stake `rUSD` into the Stability Pool to earn a share of the liquidation gains.
- [**Unstaking rUSD**](#unstake-rusd): Users can unstake `rUSD` from the Stability Pool at any time.
- [**Withdrawing Liquidation Gains**](#withdraw-liquidation-gains): Users can withdraw their share of the liquidation gains at any time.

Let's take a look at each of these functions in more detail.

### Staking rUSD

Staking rUSD is the process of depositing `rUSD` into the Stability Pool to earn a share of the liquidation gains. The more `rUSD` a user deposits, the higher their share of the pool and liquidation gains.

Staking more `rUSD` does not give users a higher share of the pool for the already earned liquidation gains.

### Unstaking rUSD

Unstaking rUSD is the process of withdrawing `rUSD` from the Stability Pool. Users can unstake their `rUSD` at any time in normal conditions.

If there are Kasas that can be liquidated in the protocol - meaning their collateral ratio are below %110 - unstaking `rUSD` will be disabled.

Unstaking `rUSD` does not take away users share of the pool for the already earned liquidation gains.

### Withdrawing Liquidation Gains

Withdrawing liquidation gains is the process of withdrawing a user's share of the liquidation gains from the Stability Pool. Users can withdraw their share of the liquidation gains at any time.

After users withdraw their share of the liquidation gains, the gains are reset to zero and users will need to wait for the next liquidation to earn more gains.

Users can increase their share of the liquidation gains by staking more `rUSD` into the Stability Pool.
