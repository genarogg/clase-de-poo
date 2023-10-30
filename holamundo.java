public class Humano {
    protected double manos;
    private int edad;

      public Humano (int edad){
        colorPiel = this.colorPiel;
        edad = this.edad;
    }

    public Humano (String colorPiel,int edad){
        colorPiel = this.colorPiel;
        edad = this.edad;
    }


    public Humano(String manos, int edad, String colorPiel) {
        this.manos = manos;
        this.edad = edad;
        this.colorPiel = colorPiel;
    }

public Humano(String manos, String edad, String colorPiel) {
        this.manos = manos;
        this.edad = edad;
        this.colorPiel = colorPiel;
    }

    public String getManos() {
        return manos;
    }

    public void setManos(String manos) {
        this.manos = manos;
    }

    public int getEdad() {
        System.out.println("holasd");
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getColorPiel() {
        return colorPiel;
    }

    public void setColorPiel(String colorPiel) {
        this.colorPiel = colorPiel;
    }

    private String colorPiel;



}
