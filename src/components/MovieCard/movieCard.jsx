import "./movieCard.css";

export const MovieCard = ({ movie }) => {
  const { Title, Year, Poster } = movie;
  return (
    <div className='card-container'>
      <div className='hover-zoom'>
        <div className='card-img-container'>
          <img className='card-img' src={Poster} alt='movie-card' />
        </div>
        <div className='card-details'>
          <div>
            <span className='title'>{Title}</span>
          </div>

          <div className='ratings'>
            <span>Year:{Year}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
