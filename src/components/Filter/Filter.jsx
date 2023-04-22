import { useDispatch, useSelector } from 'react-redux';
import { Label, Magnifier } from './Filter.styled';
import { getFilterValue } from 'redux/selectors';
import { filter } from 'redux/filterSlice';

export const Filter = () => {
  const filterValue = useSelector(getFilterValue);

  const dispatch = useDispatch();
  const handleChangeFilter = e => dispatch(filter(e.currentTarget.value));

  return (
    <Label htmlFor="">
      <p>Find contacts by name</p>

      <input type="text" value={filterValue} onChange={handleChangeFilter} />
      <Magnifier />
    </Label>
  );
};
