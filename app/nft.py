import os
from dotenv import load_dotenv
import requests
load_dotenv()

apikey = os.getenv('VERBWIRE_API_KEY')
url = "https://api.verbwire.com/v1/nft/mint/quickMintFromFile"

files = {"filePath": ("./fronted/components/assets/treeNFT.png", open("treeNFT.png", "rb"), "image/png")}
payload = {
    "allowPlatformToOperateToken": "true",
    "chain": "goerli",
    "name": "myNFT",
    "description": "Minting my reward"
}
headers = {
    "accept": "application/json",
    "X-API-Key": apikey
}

response = requests.post(url, data=payload, files=files, headers=headers)


