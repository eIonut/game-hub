import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import React from 'react';

function GameGrid() {
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames()
  const skeletons = [1,2,3,4,5,6];

  if(error) return <Text>{error.message}</Text>
  return (
    <Box padding="10px">
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding="10px" spacing={6}>
      {isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton key={skeleton}></GameCardSkeleton></GameCardContainer>)}
      {data?.pages.map((page, index) =>
      <React.Fragment key={index}>
        {page.results.map(game => <GameCardContainer key={game.id}><GameCard key={game.id} game={game}/></GameCardContainer>)}
      </React.Fragment>)}
    </SimpleGrid>
    {hasNextPage && <Button marginY={5} onClick={() => fetchNextPage()}>{isFetchingNextPage ? 'Loading...' : 'Load More'}</Button>}
    </Box>
  )
}

export default GameGrid
