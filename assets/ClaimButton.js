
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const sdk = new ThirdwebSDK(Scroll, {
  clientId: "Ybf5cb04d2d40e0b2a793eb194f211372",
});
const contract =  sdk.getCawaitontract("0xc1832BF42112aA92198C5E6Ea527dE0927Ef9C61");

export default function ClaimButton() {
  const nftDrop = useNFTDrop("0xc1832BF42112aA92198C5E6Ea527dE0927Ef9C61");
  const { mutate: claimNft } = useClaimNFT(nftDrop);

  return (
      <button
        onClick={() =>
          claimNft({
            quantity: 1, // Укажите нужное количество NFT
            to: address, // Укажите адрес получателя
          })
        }
      >
        Claim
      </button>
  );
}