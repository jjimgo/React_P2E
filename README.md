기존의 P2E, P&E에서 발생할수 있는 `판매자만 있고 구매자가 없는` 생태계를 보완하기 위해서 지분증명(PoS)와 비슷한 형태를 구현해 보았습니다.

Node_Schedule에 의해서 특정 시간에 소유한 땅에 따라서 코인이 주어지며, 해당 코인을 통해 캐릭터의 능력치를 향상, 오프체인에서 구현되어 다루어 지고 있는 병력수, 또는 NFT구매가 가능합니다.

또한 이후에도 NFT거래또한 가능한 프로젝트를 구현 하였습니다.

기본적으로 Web3-Js SDK를 활용하였고 `사용자들을 고려`, `트랜잭션 처리시간을 고려`하여 후에 한번에 처리를 할 수 있는 Betch_Server를 구현하여 트랜잭션을 처리하고 있습니다.




이후 Caver-js를 활용한다면 DAO의 형태가 가능하다고 생각을 하여 컨트랙트를 수정하였습니다.
- `Dao_Contract브랜치`
- 하지만 Delegate Call부분을 잘못 활용하여 부족한 컨트랙트가 되어버렸고 이 부분을 해결하고자 한다면 모든 부분을 엎어야 했기 떄문에 아직은 손대지 못하고 있습니다
