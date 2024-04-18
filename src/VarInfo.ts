export class VarInfo {
   public Id: number
   public Linenumber: number
   public IncludeLevel: number
   public IncludedLine: number
   public Scope: number
   public LocalIndex: number
   public ArrayElementSize: number
   public Used: boolean
   public Watch: boolean
   public IsArray: boolean
   public DisplayFormat: number //displayFormat: 0=DEC;1=HEX;2=BIN;3=OCT
   public Name: string
   public Cname: string
   public VarType: string
   public IncludedFile: string
   public SubFunc: string
   public WatchRange: string //'for Arrays and UDTs
   public Indexes: string  //'for Arrays and UDTs
   public Elements: string  //'for Arrays and UDTs
   public ElementTypes: string //'for Arrays and UDTs
   public ElementOffset: string
   public Storage: string
}