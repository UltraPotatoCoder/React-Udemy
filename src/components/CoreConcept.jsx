function CoreConcept({ image, title, description }) {
  console.log({ image, title, description });

  return (
    <li className='core-concept-item'>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default CoreConcept;
