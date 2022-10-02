import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_THE_CHARACTERS } from './RickMortySchema/query';

const RickMorty = () => {
  const [getCharacters, { data, error, loading }] =
    useLazyQuery(GET_THE_CHARACTERS);
  console.log(data);
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
            <img src={char.image} alt={char.name} width={200} height={200} />
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
        {[1, 2, 3, 4, 5].map((page) => (
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
        ))}
      </div>
    </>
  );
};

export default RickMorty;
