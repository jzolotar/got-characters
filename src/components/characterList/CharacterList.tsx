import styled from 'styled-components';

const CharacterList = () => {
  return (
    <GridTable>
      <article>
        <div>Character</div>
        <div>Alive</div>
        <div>Gender</div>
        <div>Culture</div>
        <div>Allegiances</div>
      </article>
      <article>
        <div>Character</div>
        <div>Alive</div>
        <div>Gender</div>
        <div>Culture</div>
        <div>Allegiances</div>
      </article>
      <article>
        <div>Character</div>
        <div>Alive</div>
        <div>Gender</div>
        <div>Culture</div>
        <div>Allegiances</div>
      </article>
      <article>
        <div>Character</div>
        <div>Alive</div>
        <div>Gender</div>
        <div>Culture</div>
        <div>Allegiances</div>
      </article>
      <article>
        <div>Character</div>
        <div>Alive</div>
        <div>Gender</div>
        <div>Culture</div>
        <div>Allegiances</div>
      </article>
    </GridTable>
  );
};

const GridTable = styled.section`
  display: grid;
  margin: 0 auto;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);
  align-items: top;
  background: rgba(236, 232, 232, 0.98);
  border-radius: 0.5rem;
  gap: 0.25rem;

  article {
    display: grid;
    grid-template-columns: 4fr 1fr 1fr 1fr 2fr;

    &:not(:last-child) {
      border-bottom: 1px solid #ddd;
    }

    &:first-child {
      border-radius: 0.5rem 0.5rem 0 0;
      background: rgba(193, 193, 193, 0.528);
      font-weight: bold;
      text-shadow: 0 2px 1px #fff;
    }

    div {
      padding: 1rem;
      &:not(:last-child) {
        border-right: 1px solid #ddd;
      }
    }
  }
`;

export default CharacterList;
