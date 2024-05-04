const LabelInput = ({ label, required }: CustomLabelProps) => {
  return (
    <div>
      <label htmlFor='label'>
        <span style={{ textTransform: 'capitalize', fontSize: '0.9rem', color: '#313131' }} className={'font-semibold'}>
          {label}
        </span>
        {label && required && <span className='text-red-500 ml-1'>*</span>}
      </label>
    </div>
  );
};

export default LabelInput;
