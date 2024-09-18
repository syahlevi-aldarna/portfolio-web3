import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

// Import gambar
import boredApe from '../images/bored-ape.png';
import bitcoinPunk from '../images/Bitcoin-Punk.png';
import azuki from '../images/Azuki.png';
import coolCats from '../images/Cool-Cats.png';

// ... (styled components tetap sama)

const GalleryContainer = styled.section`
  margin: 60px 0;
`;

const NFTGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const NFTCard = styled(animated.div)`
  background-color: ${props => props.theme.cardBackground};
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const NFTImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const NFTInfo = styled.div`
  padding: 15px;
`;

const NFTTitle = styled.h3`
  font-size: 1.2rem;
  color: ${props => props.theme.primary};
  margin-bottom: 10px;
`;

const NFTDescription = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.text};
`;

function NFTGallery() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000 }
  });

  const nfts = [
    { 
      id: 1, 
      title: "Kera Bosan #3749", 
      image: boredApe, 
      description: "NFT Klub Kapal Pesiar Kera Bosan" 
    },
    { 
      id: 2, 
      title: "Bitcoin Punk", 
      image: bitcoinPunk, 
      description: "Bitcoin Punk NFT" 
    },
    { 
      id: 3, 
      title: "Azuki #9605", 
      image: azuki, 
      description: "Koleksi NFT Azuki" 
    },
    {
      id: 4,
      title: "Cool Cats",
      image: coolCats,
      description: "Koleksi NFT Cool Cats"
    }
  ];

  return (
    <GalleryContainer id="nftgallery">
      <h2>Galeri NFT</h2>
      <NFTGrid>
        {nfts.map((nft) => (
          <NFTCard key={nft.id} style={fadeIn}>
            <NFTImage 
              src={nft.image} 
              alt={nft.title} 
            />
            <NFTInfo>
              <NFTTitle>{nft.title}</NFTTitle>
              <NFTDescription>{nft.description}</NFTDescription>
            </NFTInfo>
          </NFTCard>
        ))}
      </NFTGrid>
    </GalleryContainer>
  );
}

export default NFTGallery;