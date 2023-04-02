import os
from dotenv import load_dotenv
import requests
load_dotenv()

def quickMint(recipientAddress):
    apikey = os.getenv('VERBWIRE_API_KEY')

    url = "https://api.verbwire.com/v1/nft/mint/quickMintFromFile"

    files = {"filePath": ("./frontend/src/components/assets/treeNFT.png", open("./frontend/src/components/assets/treeNFT.png", "rb"), "image/png")}
    payload = {
    "allowPlatformToOperateToken": "true",
    "chain": "goerli",
    "name": "myNFT",
    "description": "Minting my reward",
    "recipientAddress": recipientAddress,
    }
    headers = {
    "accept": "application/json",
    "X-API-Key": apikey,
    }

    response = requests.post(url, data=payload, files=files, headers=headers)

    return response.text

    



