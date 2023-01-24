import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsByName, loading, setCurrentPage } from "../../redux/actions";
import './SearchBar.css'

const SearchBar = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const onChange = (e)=> {
    setName(e.target.value);
  }

  return (
    <form onSubmit={async (e) => {
      e.preventDefault();
      setName('');
      dispatch(loading());
      await dispatch(setCurrentPage(1));
      document.getElementById('fTemps').value = '';
      document.getElementById('fExisting').value = '';
      document.getElementById('alphabetical').value = '';
      document.getElementById('byWeight').value = '';
      await dispatch(getDogsByName(name));
      dispatch(loading());
    }}>
      <input
        className="searchbar"
        type="text"
        value={name}
        placeholder="Buscar por nombre..."
        onChange={onChange}
      />
      <input className="searchbarbutton" type="submit" value="Buscar" />
    </form>
  );
}

export default SearchBar;