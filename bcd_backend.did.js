export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addItem' : IDL.Func([IDL.Text, IDL.Text], [IDL.Text], []),
    'getItems' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
