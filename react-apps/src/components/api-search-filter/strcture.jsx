export default function Strcture({ data, handleClick }) {
    return (
      <ul>
        {data && data.length
          ? data.map((item, index) => (
              <li className="search-li" onClick={handleClick} key={index}>
                {item}
              </li>
            ))
          : null}
      </ul>
    );
  }