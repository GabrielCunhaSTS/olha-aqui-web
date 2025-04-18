import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import NewsCard from '../components/cards/NewsCard';
import str from '../localized/languages/ptBr';
import useNews from '../hooks/useNews';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: start;
`;

const Title = styled.h1`
  font-size: 26px;
  margin-top: 25px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Subtitle = styled.h1`
  font-size: 15px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};
`;

const News = () => {
  const navigate = useNavigate();
  const { newsList } = useNews();

  return (
    <Container>
      <Title>{str.titlePages.News.Title}</Title>
      <Subtitle>{str.titlePages.News.SubTitle}</Subtitle>
      <Grid>
        {newsList.map((item) => (
          <NewsCard key={item.id} data={item} nav={navigate} />
        ))}
      </Grid>
    </Container>
  );
};

export default News;
