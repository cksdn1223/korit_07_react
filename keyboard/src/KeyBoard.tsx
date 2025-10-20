import Key from './Key'

function KeyBoard() {
  return (
    <>
      <div className='keyboard-container'>
        <Key alp='q'/>
        <Key alp='w'/>
        <Key alp='e'/>
        <Key alp='r'/>
        <Key alp='t'/>
        <Key alp='y'/>
        <Key alp='u'/>
        <Key alp='i'/>
        <Key alp='o'/>
        <Key alp='p'/>
        <Key alp='['/>
        <Key alp=']'/>
        <Key alp='\'/>
      </div>
      <div className='keyboard-container'>
        <Key alp='a'/>
        <Key alp='s'/>
        <Key alp='d'/>
        <Key alp='f'/>
        <Key alp='g'/>
        <Key alp='h'/>
        <Key alp='j'/>
        <Key alp='k'/>
        <Key alp='l'/>
        <Key alp=';'/>
        <Key alp="'"/>
      </div>
      <div className='keyboard-container'>
        <Key alp='z'/>
        <Key alp='x'/>
        <Key alp='c'/>
        <Key alp='v'/>
        <Key alp='b'/>
        <Key alp='n'/>
        <Key alp='m'/>
        <Key alp=','/>
        <Key alp='.'/>
        <Key alp='/'/>
      </div>
    </>
  );
}

export default KeyBoard;