import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { GET_THE_CHARACTERS } from './RickMortySchema/query';
import { Box, Pagination, PaginationItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const RickMorty = () => {
  const [getCharacters, { data, error, loading }] =
    useLazyQuery(GET_THE_CHARACTERS);
  const [pageInfo, setPageInfo] = useState(1);
  console.log(data);
  console.log(pageInfo);
  if (error) console.log(error);

  useEffect(() => {
    getCharacters({
      variables: {
        page: 1,
      },
    });
  }, []);
  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Loading Characters...</h1>
      </div>
    );
  }
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px',
        }}
      >
        {data?.characters?.results?.map((char) => (
          <div key={char.id} style={{}}>
            <LazyLoadImage
              src={char.image}
              alt={char.name}
              width={200}
              height={200}
            />
            <h3>{char.name}</h3>
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          marginTop: 50,
          marginBottom: 200,
        }}
      >
        {/* {[1, 2, 3, 4, 5, 6, 7].map((page) => (
          <button
            style={{ padding: '10px', cursor: 'pointer' }}
            onClick={() => {
              getCharacters({
                variables: {
                  page: page,
                },
              });
            }}
          >
            {page}
          </button>
        ))} */}
      </div>
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Pagination
          count={data?.characters?.info?.pages}
          onChange={(e, page) => {
            console.log(page);
            getCharacters({
              variables: {
                page: page,
              },
            });
          }}
        />
      </Box>
    </>
  );
};

export default RickMorty;
