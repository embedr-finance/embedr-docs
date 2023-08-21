---
sidebar_position: 2
title: Stable Coin Factory
---

# Stable Coin Factory

Stable Coin Factory allow users to mint EMBEDr's native stable coin `rUSD` by depositing `COLLATERAL_TOKEN`.

`rUSD` is a algorithmic stable coin that is pegged to the US Dollar.

Notable features of the factory include:

- **0% interest rate** - as a borrower, there’s no need to worry about constantly accruing debt
- **Minimum collateral ratio of %110** - more efficient usage of deposited collateral
- **Directly redeemable** - rUSD can be redeemed at face value for the underlying collateral at any time

## Core Functionality

There are several core functions that the factory provides:

- [**Opening a Kasa**](#opening-a-kasa) - mint `rUSD` by depositing collateral
- [**Depositing Collateral**](#depositing-collateral) - deposit more collateral to an existing Kasa
- [**Withdrawing Collateral**](#withdrawing-collateral) - withdraw collateral from an existing Kasa
- [**Borrowing rUSD**](#borrowing-rusd) - borrow `rUSD` from an existing Kasa
- [**Repaying rUSD**](#repaying-rusd) - repay `rUSD` to an existing Kasa
- [**Liquidating Kasa(s)**](#liquidating-kasas) - liquidate a Kasa that has fallen below the minimum collateral ratio
- [**Redeeming rUSD**](#redeeming-rusd) - redeem `rUSD` for the underlying collateral

Let's take a look at each of these functions in more detail.

### Opening a Kasa

Opening a Kasa is the process of minting rUSD by depositing collateral. In order to use EMBEDr's products, a single user needs to have a Kasa registered in the protocol.

Users can open a Kasa by providing some amount of collateral to the protocol. The valid amounts for `COLLATERAL_TOKEN` and `rUSD` are based on the collateral ratio of the Kasa.

The formula for calculating the collateral ratio is:

```
COLLATERAL_AMOUNT * COLLATERAL_PRICE * 100 / LOAN_AMOUNT
```

This amount must be above the minimum collateral ratio of 110% in order to open a Kasa. If not - the transaction will fail.

While opening a Kasa, a certain amount of fee is cut from the sent collateral amount and taken by the protocol for `EMBD` incentives.

### Depositing Collateral

Depositing collateral is the process of adding more collateral to an existing Kasa. Only the Kasa owner is allowed to add collateral to their Kasa.

After opening a Kasa, users can increase their collateral amount by depositing more collateral into their Kasa. This operation will always increase user's collateral ratio if collateral price stays the same.

Having more collateral means users will be able to borrow more rUSD from the protocol and be better protected from liquidation.

### Withdrawing Collateral

Withdrawing collateral is the process of removing collateral from an existing Kasa. Only the Kasa owner is allowed to withdraw collateral from their Kasa.

After opening a Kasa, users can decrease their collateral amount by withdrawing collateral from their Kasa. This operation will always decrease user's collateral ratio if collateral price stays the same.

:::caution
This transaction will not be executed if the collateral ratio is dropped below %110 after the operation - the protocol will make sure the overall collateral ratio stays on a healthy level to avoid liquidations.
:::

### Borrowing rUSD

Borrowing rUSD is the process of borrowing `rUSD` from an existing Kasa. Only the Kasa owner is allowed to borrow `rUSD` from their Kasa.

After opening a Kasa, users can borrow `rUSD` from their Kasa. This operation will decrease user's collateral ratio if collateral price stays the same.

There is a minimum amount of `rUSD` that can be borrowed from a Kasa. Users must borrow at least `2000 rUSD` from their Kasa.

:::caution
This transaction will not be executed if the collateral ratio is dropped below %110 after the operation - the protocol will make sure the overall collateral ratio stays on a healthy level to avoid liquidations.
:::

### Repaying rUSD

Repaying rUSD is the process of repaying `rUSD` to an existing Kasa. Only the Kasa owner is allowed to repay `rUSD` to their Kasa.

After borrowing `rUSD` from a Kasa, users can repay `rUSD` to their Kasa. This operation will increase user's collateral ratio if collateral price stays the same.

When all of the debt in Kasa is repaid, the Kasa will be closed and the remaining collateral will be sent to the user.

### Liquidating Kasa(s)

Liquidation is the process of closing a Kasa that has fallen below the minimum collateral ratio. Liquidation can be initiated by both users and EMBEDr Protocol.

Liquidated Kasas are closed and their collateral and debt are redistributed to either the Stability Pool or other active Kasas.

There are two scenarios that can happen during this process:

- **If Stability Pool can cover Kasa's debt with it's total rUSD stake amount** - Kasa will be closed and all of it's collateral will be sent to stability pool providers as gains.
- **If Stability Pool cannot cover Kasa's debt** - Kasa will be closed and it's collateral + debt will be redistributed to all the other active Kasas.

#### Stability Pool distribution

If Stability Pool is used during the liquidation process, a snapshot of the pool is taken and saved in the protocol to determine each provider's share of the pool.

The amount of collateral gained from the liquidated Kasa is sent to a new contract for providers to claim. This contract will be used to distribute the collateral to the providers based on the snapshot taken during the liquidation process.

#### Active Kasa redistribution

If Stability Pool is not used during the liquidation process, all of the collateral and debt of the liquidated Kasa is redistributed to all the other active Kasas based on their collateral and debt amounts in the protocol.

### Redeeming rUSD

Redeeming rUSD is the process of exchanging `rUSD` for `COLLATERAL_TOKEN` as if `rUSD` is equal to exactly 1 USD. This means for X amount of `rUSD` - users will get X Dollars worth of `COLLATERAL_TOKEN` in return.

To cover the redeemed `rUSD` amount and send collateral to the user, riskiest Kasas are selected and their collateral + debt is decreased.

There are two scenarios that can happen during this process:

- **If Kasa can cover the redeemed `rUSD` amount with it's total debt amount** - that Kasa will be partially drained and it will have the remaining collateral and debt.
- **If Kasa cannot cover the redeemed `rUSD` amount** - that Kasa will be fully drained and it will have the remaining collateral + close to zero debt. Kasa will still be open.

While this process takes place, a certain amount of fee is cut from the final collateral amount and taken by the protocol for `EMBD` incentives.

:::caution
Redeeming is not the same as repaying `rUSD` to a Kasa. In order to pay back the debt, users must use the [repay](#repaying-rusd) function.
:::

## Recovery Mode

When the total collateral ratio (TCR) of the protocol falls below **%150**, the protocol enters recovery mode. In this mode the protocol's behavior changes to protect the protocol from further losses.

During the recovery mode, the protocol will not allow these operations:

- [**Opening a Kasa**](#opening-a-kasa) - users will not be able to open a Kasa if its collateral ratio is below %150.
- [**Withdrawing Collateral**](#withdrawing-collateral) - users will not be able to withdraw collateral from a Kasa if its collateral ratio drops below %150 after the operation.

### Why is Recovery Mode needed?

The goal of Recovery Mode is to incentivize borrowers to behave in ways that promptly raise the TCR back above 150%, and to incentivize rUSD holders to replenish the Stability Pool.

Economically, Recovery Mode is designed to encourage collateral top-ups and debt repayments, and also itself acts as a self-negating deterrent: the possibility of it occurring actually guides the system away from ever reaching it. Recovery Mode is not a desirable state for the system.

:::info
During the Recovery Mode, the borrowing fee is set to **0%** to incentivize users to borrow more rUSD - hence increasing the TCR.
:::

### Liquidations during Recovery Mode

Liquidations work differently during the Recovery Mode. Here is a table that shows the behavior of the protocol during the Recovery Mode:

- **ICR** = Individual Collateral Ratio - the collateral ratio of a single Kasa
- **MCR** = Minimum Collateral Ratio - the minimum collateral ratio of %110
- **TCR** = Total Collateral Ratio - the total collateral ratio of the protocol
- **SP** = Stability Pool - the total rUSD amount in the Stability Pool

| <div style={{width: "160px" }}>Condition</div> | Behaviour |
| :---: | --- |
| ICR <= 100% | All collateral and debt is distributed to active Kasas. |
| 100% < ICR < MCR <br />+<br /> SP > Kasa's Debt | **1-** Stability Pool's rUSD amount is decreased by the same amount as Kasa's debt. <br /> **2-** The Kasa's collateral is shared between Stability Pool providers. |
| 100% < ICR < MCR <br />+<br /> SP < Kasa's Debt | **1-** All of the available rUSD in Stability Pool is used to pay Kasa's debt. <br /> **2-** A fraction of Kasa's collateral - equal to the ratio of its offset debt to its entire debt - is shared between Stability Pool providers. <br /> **3-** The rest of the collateral and debt is distributed to active Kasas. |
| MCR <= ICR < 150% <br />+<br /> SP >= Kasa's Debt | **1-** Stability Pool's rUSD amount is decreased by the same amount as Kasa's debt. <br /> **2-** A fraction of collateral with dollar value equal to `1.1 * debt` is shared between Stability Pool providers. <br /> **3-** Nothing is redistributed to other active Kasas. <br /> **4-** Since Kasa's ICR was > 1.1 , the Kasa has a collateral remainder, which is sent to a new contract to be claimed by the borrower. |
| MCR <= ICR < 150% <br />+<br /> SP < Kasa's Debt | Do nothing. |
| ICR >= 150% | Do nothing. |